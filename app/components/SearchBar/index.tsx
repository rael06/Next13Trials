import classes from "./SearchBar.component.module.css";

export default function SearchBar() {
  return (
    <div className={classes.root}>
      <input type="text" placeholder="Search..." />
    </div>
  );
}
