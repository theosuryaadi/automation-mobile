describe("Login Functional Test", () => {
  // Positive Test Case
  it("Positive - Valid Password", async () => {
    // Click on Sign In Button
    await $(
      '//android.widget.Button[@resource-id="com.admob.mayank.firebaselogin:id/sign_in_button"]'
    ).click();

    // Set XPath Email, Password, and Login Button
    const emailField = await $(
      '//android.widget.EditText[@resource-id="com.admob.mayank.firebaselogin:id/email"]'
    );
    const passwordField = await $(
      '//android.widget.EditText[@resource-id="com.admob.mayank.firebaselogin:id/password"]'
    );
    const loginButton = await $(
      '//android.widget.Button[@resource-id="com.admob.mayank.firebaselogin:id/btn_login"]'
    );

    // Set Email, Password, and Click on Login Button
    await emailField.setValue("test2@gmail.com");
    // Set Valid Password
    await passwordField.setValue("123456789");
    await loginButton.click();
  });

  // Negative Test Case
  it("Negative - Invalid Password", async () => {
    // Click on Sign In Button
    await $(
      '//android.widget.Button[@resource-id="com.admob.mayank.firebaselogin:id/sign_in_button"]'
    ).click();

    // Set XPath Email, Password, and Login Button
    const emailField = await $(
      '//android.widget.EditText[@resource-id="com.admob.mayank.firebaselogin:id/email"]'
    );
    const passwordField = await $(
      '//android.widget.EditText[@resource-id="com.admob.mayank.firebaselogin:id/password"]'
    );
    const loginButton = await $(
      '//android.widget.Button[@resource-id="com.admob.mayank.firebaselogin:id/btn_login"]'
    );

    // Set Email, Password, and Click on Login Button
    await emailField.setValue("test2@gmail.com");
    // Set Invalid Password
    await passwordField.setValue("123456");
    await loginButton.click();
  });
});
