

// Get an element by it identifiant
const Id = (strId) => {
    return document.getElementById(strId);
}


// Verify if a given element contains the given class
export const hasClass = (elm, cls) => {
    return elm.classList.contains(cls);
}


// Add a class to the given element
export const addClass = (elm, cls) => {
    elm.classList.add(cls);
}


// Remove a class to the given element
export const removeClass = (elm, cls) => {
    elm.classList.remove(cls)
}
  

// remove if exists or add instead a class in the given element
export const toggleClass = (elm, cls) => {
    elm.classList.toggle(cls)
}



// Calculate the list of items size based on amount of element
export const calItemsSize = (total) => {
    let itemsSize = [];
    if(total > 0 && total >= 7)
        itemsSize.push(7);
    if(total >  7)
        itemsSize.push(14);
    if(total > 14)
        itemsSize.push(20);
    return itemsSize;
}


// Calcutate the list of pages based on number of page
export const calPages = (pages) => {
    let retPages = [];
    for(let i = 0; i < pages; i++) {
        retPages.push(i + 1);
    }
    return retPages;
}


// Add the disable class to string class
export const disableElement = (clsStr, has) => {
    let retStr = clsStr.replace('disabled', '');
    if(!has) 
        return retStr + ' disabled'
    else
        return retStr;
}


// Count the number of user's selected element
export const countNumSelected = (arrData) => {
    let num = 0;
    for (let d of arrData)
      if (d.checked) num++;
    return num
}  


export default Id;
