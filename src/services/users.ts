export function createUser(userData) {
  return fetch('http://127.0.0.1:8000/api/user/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

export function loginUser(userData) {
  return fetch('http://127.0.0.1:8000/api/user/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
}

export function getPlants() {
  return fetch('http://127.0.0.1:8000/api/verdespace/plants/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  }).then(response => response.json());
}
