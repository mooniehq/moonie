import * as React from "react";
import Link from 'next/link';
import HeadPage from './widgets/head';
import "../css/main.css";
import "../css/bootstrap.min.css";
import MarkdownEditor from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

function Home () {
  const markdownToHtmlConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });
  const [markdownContent, setMarkdownContent] = React.useState("");
  const [selectedMardownMode, setSelectedMarkdownMode] = React.useState("write");

  return (
    <>
      <HeadPage></HeadPage>
      <ul>
        <li>Home</li>
        <li>
          <Link href="/signin">
            <a>Sign In</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
      </ul>

      <h1>This is our homepage.</h1>

      <div>
        <MarkdownEditor 
          value = {markdownContent}
          onChange = {setMarkdownContent}
          selectedTab = {selectedMardownMode}
          onTabChange = {setSelectedMarkdownMode}
          generateMarkdownPreview = {markdown => 
            Promise.resolve(markdownToHtmlConverter.makeHtml(markdown))
          }
        />
      </div>
    </>
  )
}

export default Home
