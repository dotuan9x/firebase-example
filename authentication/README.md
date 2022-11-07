# Authentication

Demo authentication: https://fir-ui-demo-84a6c.firebaseapp.com/

## Một số ví dụ về Authenticate với Google Firebase Authentication

### Sign in with Google
![Sign in with Google](https://developers.google.com/static/identity/gsi/web/images/account-chooser.png)

### One Tap sign
![One Tap sign in](https://developers.google.com/identity/gsi/web/images/one-tap-sign-in.png)

## Cài đặt và sử dụng

### Cài đặt
Để sử dụng tính năng này, ta cần phải tạo một project trên [Google console](https://console.firebase.google.com/), sau đó enable tính năng Google sign in (Authentication).
Sau đó enable các Sign-in method (provider). Ví dụ: login bằng Google account, login bằng Facebook account, Email/Password,... 
Chi tiết tham khảo bài viết [Authenticate Using Google with JavaScript](Authenticate Using Google with JavaScript)

Đối với tính năng One Tap thì ta sẽ phải [Get your Google API client ID](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid).

### Sử dụng

Đối với web ta có thể sử dụng thư viện [FirebaseUI for Web — Auth](https://github.com/firebase/firebaseui-web/blob/master/README.md#demo) và đối với React thì ta có thể sử dụng thư viện [FirebaseUI React Components
](https://github.com/firebase/firebaseui-web-react)

Sử dụng `FirebaseAuth`

```text
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// Disable auto-sign in.
ui.disableAutoSignIn();

ui.start('#firebaseui-container', uiConfig);

# Return React component
return (
    <>
      <div id="firebaseui-container"></div>
    </>
)
```

Sử dụng `StyledFirebaseAuth` (Giao diện được hỗ trợ sẵn)

```text
<>
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
</>
```


### Các bài viết tham khảo:

[Get Started with Firebase Authentication on Websites](https://firebase.google.com/docs/auth/web/start)




https://firebase.google.com/docs/auth/web/firebaseui





