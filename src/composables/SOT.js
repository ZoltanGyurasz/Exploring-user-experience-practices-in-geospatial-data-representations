import { ref, computed } from "vue";
const loggedIn = ref(false);
let navBar = [];
let navBarHeight = 0;





export const loggedInModifiers = () => {
    const logIn = () => loggedIn.value = true;
    const logOut = () => loggedIn.value = false;

    return {
        loggedIn,
        logIn,
        logOut,
    };
};

export const navBarItems = () => {
    const addNavbarItem = (name, link) => {
        navBar.push({name:name,link:link})
    }
    const removeNavbarItem = (itemToRemove) =>{
        for (let i = navBar.length; i > 0; i++){
            if(navBar[i].name === itemToRemove)
                navBar.splice(i,1)
        }
    }
    const flushNavbar = () => navBar = [];

    const setNavbarHeight = (newHeight) => {
        navBarHeight = newHeight;
        console.log("navbar Height set: " + navBarHeight)
    }
    
    const getNavbarHeight = () => {
      return navBarHeight
    }

    return {
        navBar,
        addNavbarItem,
        removeNavbarItem,
        flushNavbar,
        setNavbarHeight,
        getNavbarHeight
    };
};