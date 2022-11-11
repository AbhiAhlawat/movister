const FAQ = () => {
  const handleClick = (e) => {
    e.target.classList.toggle("active");

    // let activeAccordions = document.querySelectorAll('.accordion.active');
    // activeAccordions.forEach((acc) => {
    //   acc.nextElementSibling.style.maxHeight = null;
    // });

    let panel = e.target.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
      panel.style.maxHeight = null;
      e.target.style.marginBottom = "8px";
    } else {
      panel.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginBottom = "8px";
      e.target.style.marginBottom = "1px";
    }
  };

  return (
    <div className="faq">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="qna">
        <button onClick={(e) => handleClick(e)} className="accordion">
          What is MOVISTER?
        </button>
        <div className="panel">
          <p>
            MOVISTER is a Recommendation website that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
            <br />
            <br />
            You can watch related videos as much as you want, whenever you want,
            without a single ad. There's always something new to discover, and
            new TV shows and movies are added every week!
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
          How much does MOVISTER cost?
        </button>
        <div className="panel">
          <p>
            Explore MOVISTER on your smartphone, tablet, Smart TV, laptop, or
            streaming device, without any cost. No extra costs, no contracts.
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
          Where can I watch?
        </button>
        <div className="panel">
          <p>
            Watch anywhere, anytime, on an unlimited number of devices. Click
            <a href="https://ms-movrec-abhiahlawat.vercel.app/"> here </a>
            to watch instantly on the web from your personal computer or on any
            internet-connected device, including smart TVs, smartphones,
            tablets, streaming media players and game consoles.
            <br />
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
          What can I watch on MOVISTER?
        </button>
        <div className="panel">
          <p>
            MOVISTER has an extensive library of feature films, documentaries,
            TV shows, anime, award-winning MOVISTER originals, and more. Watch
            as much as you want, anytime you want.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
