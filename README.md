# Install

react bootstrap,
firebase,
toastify,
redux-toolkit,
react router dom,
react icon,

# create git repo and link it- make sure we have git ignore file for API key

Install firebase
Copy the code
Create a folder > firebase-config> create a file index.js
Create .env file
REACT_APP_API_KEY=“key”
Now in the firebase config
apiKey:REACT_APP_API_KEY
Import {getAuth} from ‘firebase/auth’
export const auth = getAuth(app);
Import {getFirestore} from ‘firebase/firestore’
export const db=getFirestore(app);

GOTO authentication in browser then enable email/passsword
GOTO Firestone db> select region> enable
go under rules> if true for allow readwrite:if true
