import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to inventory web app$/, async function() {
    console.log(`Test username: ${process.env.TEST_USERNAME}`);
    /** 1. Launch browser */
    // @ts-ignore
    await browser.url(browser.options.sauceDemoURL)
    console.log(`>> Test config values: ${JSON.stringify(browser.options)}`);
    // await browser.maximizeWindow()
    
    /** 2. Login to inventory */
    try {
        await  $(`#user-name`).setValue(process.env.TEST_STD_USERNAME)
        await  $(`#password`).setValue(process.env.TEST_STD_PASSWORD)
        await  $(`#login-button`).click()
    } catch (err) {
        console.log(`Error in first login. Retrying..`);
        await browser.refresh()
        await browser.pause(2000)
        await  $(`#user-name`).setValue("standard_user")
        await  $(`#password`).setValue("secret_sauce")
        await  $(`#login-button`).click()
    }

    /** Login with another user */
    // await browser.pause(2000)
    // await browser.reloadSession()
    // await browser.url("https://www.saucedemo.com")
    // await  $(`#user-name`).setValue("problem_user")
    // await  $(`#password`).setValue("secret_sauce")
    // await  $(`#login-button`).click()

    await browser.back()
    await browser.pause(2000)
    await browser.forward()


    await browser.debug()
})