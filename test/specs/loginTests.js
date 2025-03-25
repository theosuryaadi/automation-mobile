describe("Login Functional Test", () => {
  // Positive Test Case
  it("Positive - Valid Password", async () => {
    await $(
      '//android.widget.Button[@resource-id="com.admob.mayank.firebaselogin:id/sign_in_button"]'
    ).click();

    const emailField = await $(
      '//android.widget.EditText[@resource-id="com.admob.mayank.firebaselogin:id/email"]'
    );
    const passwordField = await $(
      '//android.widget.EditText[@resource-id="com.admob.mayank.firebaselogin:id/password"]'
    );
    const loginButton = await $(
      '//android.widget.Button[@resource-id="com.admob.mayank.firebaselogin:id/btn_login"]'
    );

    await emailField.setValue("test2@gmail.com");
    await passwordField.setValue("123456789");
    await loginButton.click();
  });

  // Negative Test Case
  it("Negative - Invalid Password", async () => {
    await $(
      '//android.widget.Button[@resource-id="com.admob.mayank.firebaselogin:id/sign_in_button"]'
    ).click();

    const emailField = await $(
      '//android.widget.EditText[@resource-id="com.admob.mayank.firebaselogin:id/email"]'
    );
    const passwordField = await $(
      '//android.widget.EditText[@resource-id="com.admob.mayank.firebaselogin:id/password"]'
    );
    const loginButton = await $(
      '//android.widget.Button[@resource-id="com.admob.mayank.firebaselogin:id/btn_login"]'
    );

    await emailField.setValue("test2@gmail.com");
    await passwordField.setValue("123456");
    await loginButton.click();
  });
});
