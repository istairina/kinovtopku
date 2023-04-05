type props = {
  screenshots: string[];
};

export const Carousel = (props: props) => {
  return (
    <>
      <h3>Carousel {props.screenshots.length}</h3>
    </>
  );
};
