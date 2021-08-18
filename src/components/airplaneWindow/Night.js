function Night() {
  const stars = 29;
  let constalation = [];
  for (let i = 0; i < stars; i++) {
    constalation.push(<article className="star"></article>);
  }
  return (
    <>
      <div className="constalation">{constalation}</div>
    </>
  );
}

export default Night;
