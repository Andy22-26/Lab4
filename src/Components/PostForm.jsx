export default function PostForm({ newPost, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Post Form</h2>
      <div>
        <label>title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={newPost.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>body: </label>
        <input
          type="text"
          id="body"
          name="body"
          value={newPost.body}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
