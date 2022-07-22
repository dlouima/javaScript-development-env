import "./index.css";
import { deleteUser, getUser } from "./api/userApi";

/*eslint-disable no-console */
getUser().then((result) => {
    let usersBody = "";
    result.forEach((user) => {
        usersBody += `<tr>
<td><a href='#' data-id = "${user.id}" class="deleteUser">Delete</a</td>
<td>${user.id}</td>
<td>${user.firstname}</td>
<td>${user.lastname}</td>
<td>${user.email}</td>
</tr>`;
    });
    global.document.getElementById("users").innerHTML = usersBody;
    const deleteLinks = global.document.getElementsByTagName("deleteUser");

    Array.from(deleteLinks, (link) => {
        link.onClick = function (event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id".value]);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});
