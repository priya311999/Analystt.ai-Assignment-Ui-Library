import { init } from 'snabbdom';
import { h, propsModule, eventListenersModule, styleModule } from 'snabbdom';
const patch = init([propsModule, eventListenersModule, styleModule]);

let state = {
  count: 0
};

let vnode = null;


function createTemplate(state) {
  return h('div',{
    style: {
      backgroundColor: "#121212",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center"
    }
  },
   [h('div',{
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }
   },[
    h('h1',{
      style:{
        fontSize: "48px",
        fontFamily:"Roboto",
        color: "white"
    }
  }, state.count),
    h('button',{
      style: {
        backgroundColor:'#121212',
        height: '30px',
        width: '100px',
        color: 'white',
        border: '1.5px solid grey',
        borderRadius: "9999px",
        marginBottom: '12px',
      }
    , on: { mouseenter: handleMouseEnter,
            mouseleave: handleMouseLeave,
            click: increment } 
    }, "Increment"),
    h('button', {
      style: {
        backgroundColor:"#121212",
        height: '30px',
        width: '100px',
        color: 'white',
        border: '1.5px solid grey',
        borderRadius: "9999px",
        marginBottom: '4px',
      },
      on: {mouseenter: handleMouseEnter,
        mouseleave: handleMouseLeave, 
        click: decrement }
      }, "Decrement")
  ])]);
}
function handleMouseLeave(event) {
  event.target.style.backgroundColor = '#121212';
}

function handleMouseEnter(event) {
  event.target.style.backgroundColor = '#121212';
}

function updateState(newState) {
  state = { ...state, ...newState };
  render();
}

function increment() {
  updateState({ count: state.count + 1 });
}

function decrement() {
  updateState({ count: state.count - 1 });
}

function render() {
  const newVNode = createTemplate(state);
  if (vnode === null) {
    vnode = newVNode;
    patch(document.getElementById('root'), vnode);
  } else {
    patch(vnode, newVNode);
    vnode = newVNode;
  }
}

export const mount = () => {
  render();
}

export const useEffect= (effect) => {
   effect();
 }