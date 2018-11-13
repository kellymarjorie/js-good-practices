
const url = 'http://www.123fakewebaddress.kiwi/';

function getRegisteredUsers(fields, include, fromDate, toDate) {
  var user = {
    fullName: fields[0] + fields[1],
    email: fields[2],
    toDate: Date.toString(toDate),
    fromDate: Date.toString(fromDate)
  };

  var otherStuff = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: user
  }

  return fetch(url, otherStuff).then(response => response.json());
}
getRegisteredUsers(['firstName', 'lastName', 'email'], ['invitedUsers'], '2016-09-26', '2016-12-13')
