import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const SortableItem = SortableElement(( value: any ) => (
  <>
    <ImageListItem
      key={value.img}
      style={{ border: "1px solid #c5c5cb", borderRadius: "5px" }}
    >
      <img
        srcSet={`${value.img}?w=190&h=164&fit=crop&auto=format 1x,
        ${value.img}?w=190&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={value.title}
      />
    </ImageListItem>
  </>
));

const SortableList = SortableContainer(({ photos }) => {
  return (
    <>
      <ImageList cols={3} gap={10}>
        {photos.map((value, index) => (
          <SortableItem
            key={`item-${value.title}`}
            index={index}
            value={value}
          />
        ))}
      </ImageList>
    </>
  );
});

function Home() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    <>
      {console.log("oldIndex:" + oldIndex)}
      {console.log("newIndex:" + newIndex)}
      {setItems(arrayMove(items, oldIndex, newIndex))}
    </>;
  };

  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: "center" }}>Sortable Gallery</h2>
      <Grid container justify="center" alignItems="center">
        <SortableList photos={items} onSortEnd={onSortEnd} axis={"xy"} />
      </Grid>
    </div>
  );
}

export default Home;

const photos = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "1",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "2",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "3",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "4",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "6",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "7",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "8",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "9",
  },
];
