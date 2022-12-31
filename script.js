// Initialize Firebase
const firebaseConfig = {
   apiKey: "AIzaSyCdA-dypa9PiKfd-TERTiRUSWGjUJfdT6o",
     authDomain: "story-yard.firebaseapp.com",
     projectId: "story-yard",
     storageBucket: "story-yard.appspot.com",
     messagingSenderId: "125180715420",
     appId: "1:125180715420:web:fb030be82c8abc8a21a859",
     measurementId: "G-Y53PH55SRK"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase database
const database = firebase.database();

// Get a reference to the textarea element
const editor = document.getElementById('editor');

// Listen for changes to the textarea element and update the Firebase database
editor.addEventListener('input', (event) => {
  database.ref('text').set(event.target.value);
});

// Listen for updates from the Firebase database and apply them to the textarea element
database.ref('text').on('value', (snapshot) => {
  editor.value = snapshot.val();
});








// Save the file when the save button is clicked
document.getElementById('save-button').addEventListener('click', () => {
  
  
const textareaValue = document.getElementById('editor').value;
      
      const fileFormat = '.html'; // 
      const downloadLink = document.createElement('a');
      downloadLink.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(textareaValue)}`);
      downloadLink.setAttribute('download', `index${fileFormat}`);
      
      
      document.body.appendChild(downloadLink);
      downloadLink.click();
      
      document.body.removeChild(downloadLink);
      
});