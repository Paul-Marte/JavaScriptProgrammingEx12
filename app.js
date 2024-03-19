/*
    NAME    :   PAUL MARTE
    DATE    :   03/19/2024
    CLASS   :   GEX JR.
*/

/**
 * DOM query for one or many elements based on supplied selector
 * @param {string} selector The selector rule to query the DOM
 * @returns { HTMLElement | NodeListOf<HTMLElement> } none, one or many HTMLElements
 */
const $ = selector => {
    const query = document.querySelectorAll(selector);

    if (!!query) {
        if (query.length > 1) {
            return query;
        } else {
            return query[0];
        }
    }

    return query;
}

const firstName = $('#firstName');
const lastName = $('#lastName');
const phone = $('#phoneNumber');
const form = $('form');

form.addEventListener('submit', evt => {
    console.log(evt);
    evt.preventDefault();// cancel the default behavior of browser submit

    firstName.innerText = form.firstName.value.trim();
    lastName.innerText = form.lastName.value.trim();
    phoneNumber.innerText = form.phone.value.trim();
});

$('a').addEventListener('click', evt => { 
    console.log('link clicked');
    evt.preventDefault();
})