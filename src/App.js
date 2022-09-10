
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

export default function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutUs="About Us" />
      <div className="container my-3">
        <TextForm  heading="Enter the text to analyze below:" />
      </div>
    </>
);
}




//  Navbar.protypes={
//   titile:Proptypes.string,
//   aboutText:protypes.string
// }
 // for default props

// Navbar.defaultProps={
//   title:"set title here"
//   aboutUs:"About Us text here"
// }
 // If the props is compulsory then
 
// title:propstypes.string.isRequired 
// aboutUs :propstypes.string.isRequired

