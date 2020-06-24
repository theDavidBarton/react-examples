# Iterating puppeteer async methods in `for` loop vs. `Array.map()/Array.forEach()`

As all puppeteer methods are asynchronous it doesn't matter how we iterate over them. I've made a comparison and a rating of the most commonly recommended and most commonly used options.

I have created a React.Js example page with a lot of React buttons [here](https://thedavidbarton.github.io/react-examples/#/lot-of-react-buttons) (I just call it _Lot Of React Buttons_). Here (1) we are able set how many buttons to be rendered on the page; (2) we can color the black butons to green by clicking on them. I consider it an identical usecase as the OP's, and it is also a general case of browser automation (we expect something to happen if we've done something). 
Let's say our use case is:

```gherkin
Scenario outline: click all the buttons with the same selector
  Given I have <no.> black buttons on the page
  When I click on all of them
  Then I should have <no.> green buttons on the page

  Examples:
    | no.  |
    | 132  |
    | 1320 |
```

There is a conservative and a rather extreme scenario. To click **132** buttons is not a huge CPU task, **1320** can take a bit of time.

## Array.map ❌

In general if we only want to perform async methods like [`elementHandle.click`](https://pptr.dev/#?product=Puppeteer&version=v4.0.1&show=api-elementhandleclickoptions) in iteration, but we don't want to return a new array it is bad practice to use `Array.map`.

```javascript
  const elHandleArray = await page.$$('button')
  // array.map
  elHandleArray.map(async el => {
    await el.click()
  })

  await page.screenshot({ path: 'clicks_map_02.png' })
  await browser.close()
```

### 132 button scenario result:

By watching the browser in headful mode it looks like it works, but if we check when the `page.screenshot` happened: we can see the clicks were still in progress.

### 1320 button scenario result:

If we increase the number of elements with the same selector we will run into the following error:
`UnhandledPromiseRejectionWarning: Error: Node is either not visible or not an HTMLElement`, because we already reached `await page.screenshot()` and `await browser.close()`: the loop is still running but the page is already closed.

---

## Array.forEach ❌

### 1.

```javascript
  const elHandleArray = await page.$$('button')
  // array.forEach 1
  elHandleArray.forEach(async el => {
    await page.evaluate(() => el.click())
  })

  await page.screenshot({ path: 'clicks_foreach_01.png' })
  await browser.close()
```

### Result:

---

### 2.

```javascript
  const elHandleArray = await page.$$('button')
  // array.forEach 2
  elHandleArray.forEach(async el => {
    await element.click()
  })

  await page.screenshot({ path: 'clicks_foreach_02.png' })
  await browser.close()
```

### Result:

---
## page.$$eval + forEach ✅

```javascript
  // array.forEach 2
  await page.$$eval('button', links => links.map(link => link.click()))

  await page.screenshot({ path: 'clicks_eval_foreach.png' })
  await browser.close()
```

### Result:

---
## for...of ✅
```javascript
  const elHandleArray = await page.$$('button')
  // for...of
  for (const el of elHandleArray) {
    await el.click()
  }

  await page.screenshot({ path: 'clicks_eval_foreach.png' })
  await browser.close()
```

### Result:
