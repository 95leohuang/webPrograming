// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeq0AcNiMqYGU5RpwmT725Yp_60cXevQA",
    authDomain: "ntut-web-ecf2d.firebaseapp.com",
    projectId: "ntut-web-ecf2d",
    storageBucket: "ntut-web-ecf2d.appspot.com",
    messagingSenderId: "685719676046",
    appId: "1:685719676046:web:3c350472acc0ddf0dd15df"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const $listGroup = $("#listGroup");
const $createForm = $("#createForm");
const $createTodoTitle = $("#createTodoTitle");
const $createTodoColor = $("#createTodoColor");

db.collection("todoList").get()
    .then(docList => {
        docList.forEach(doc => {
            const todo = doc.data();
            $listGroup.append(`
            <li class="list-group-item">
                <span class="box bg-${todo.color}"></span>
                ${todo.title}
            </li>
            `)
        });
    })
    .catch(err => console.log(log))

$createForm.submit(function (e) {
    e.preventDefault();
    const todo = {
        title: $createTodoTitle.val(),
        color: $createTodoColor.val()
    };
    console.log("todo", todo);
    db
        .collection("todoList")
        .add(todo)
        .then(() => {
            window.location.reload();
        })
        .catch(err => console.log(err))
});

