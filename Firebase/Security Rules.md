# Firestore Security Rules

Use our flexible, extensible Firebase Security Rules to secure your data in Cloud Firestore, Firebase Realtime Database, and Cloud Storage.

Firebase Security Rules stand between your data and malicious users. You can write simple or complex rules that protect your app's data to the level of granularity that your specific app requires.

Basic structure

```
service <<name>> {
  // Match the resource path.
  match <<path>> {
    // Allow the request if the following conditions are true.
    allow <<methods>> : if <<condition>>
  }
}
```

Example

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // START HERE

    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2022, 5, 10);
    }
  }
}
```

# Simulator - Rules Playground

- {documents} - Wildcard

Simulated Query - `/doctors/{documents}`

# Security Rules

MATCH A SPEICIC COLLECTION

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {


    // MATCHING THE SPECIFIC COLLECTION
    match /{document=**} {
      allow read, write: if false;
    }

    // ONLY READ MESSAGES
    match /messages/{message}{
        allow read;
        allow write: if false;
    }
  }
}
```

ALL READ WRITE TO ALL COLLECTION IF AUTHENTICATED

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

   match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

ALLOW READ, CREATE AND NOT ALLOW DELETE & UPDATE

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

   match /messages/{message} {
      allow read, create : if request.auth != null;
      allow update,delete : if false;
    }
  }
}
```

# Functions

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

   match /messages/{message} {
      allow rea : if isLoggedIn();
      allow create : if isLoggedIn() && isValidMessage();
      allow update,delete : if false;
    }
  }

 function isLoggedIn(){
     return request.auth != null;
 }

 function isValidMessage(){
    // UID Incoming doc should match the authenticated user
    return requesr.resource.data.uid == request.auth.uid;
 }
}
```

# References

- Official Documentation - https://firebase.google.com/docs/rules
- Understanding Firestore Security Rules with Examples - https://www.youtube.com/watch?v=DjI4vdmZ7UU
