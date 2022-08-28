import Days from './Days';
import DropdownMenu from './DropdownMenu'; 
import videoBG from '../media/videoBG.MOV'

function Container() {
  return (
    <>   
        <div className="container">
        <video height={"250vh"} src={videoBG} autoPlay loop muted />
          <DropdownMenu />
          <Days />
        </div> 
    </>
  );
}

export default Container;