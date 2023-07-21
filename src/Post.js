export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1236055719.jpg?w=1390&crop=1" />
      </div>
      <div className="texts">
        <h2>5 marketing slides to bring to your next board meeting</h2>
        <p className="info">
          <a className="author">Heta Trivedi</a>
          <time>2023-07-17 16:45</time>
        </p>
        <p className="summary">
          When talking to data-driven board members, stick with what can be
          measured: marketing’s contribution to the near-term pipeline.
        </p>
      </div>
    </div>
  );
}
