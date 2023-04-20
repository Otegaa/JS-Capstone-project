const commentApi =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tPvCsAcB2y12v6uIfsLz/comments';

const postComments = async (id) => {
  let username = document.querySelector('.popup-name').value;
  let comment = document.querySelector('.popup-insights').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (username && comment) {
    await fetch(commentApi, options).then((res) => res.json());
  }

  username = '';
  comment = '';
};

const getComments = async (id) => {
  const res = await fetch(`${commentApi}?item_id=${id}`);
  const data = await res.json();
  return data;
};

export { postComments, getComments };
