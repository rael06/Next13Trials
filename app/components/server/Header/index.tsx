import classes from "./Header.component.module.css";
import LocaleSelector from "../../client/LocaleSelector";

export default function Header() {
  return (
    <header className={classes.root}>
      <h1>My movie app</h1>
      <LocaleSelector />
    </header>
  );
}
