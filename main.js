//add eventlistener to listen for clicks on the date options
//upon click increase index of the clicked card to display
//reduce the index of previously selected date card upon clicking another date
//try use class function

//add eventlisterner to elements in the nav
let nav = document.querySelector( 'nav' );
let daily = document.querySelectorAll( '.daily' );
let weekly = document.querySelectorAll( '.weekly' );
let monthly = document.querySelectorAll( '.monthly' );
nav.addEventListener( 'click', event => {
    target = event.target
    if( target.matches( 'a' ) ) {
        let showTimeCard = new ShowTimeCard( daily, weekly, monthly )
        showTimeCard.increaseIndex( target )
    }else {
        return
    }
} )

class ShowTimeCard {
    constructor( timeline1, timeline2, timeline3 ) {
        this._timeline1 = timeline1
        this._timeline2 = timeline2
        this._timeline3 = timeline3
    }
    increaseIndex(target) {
        if( target.classList.contains( 'timeDaily' ) ) {
            this._timeline1.forEach( element => {
                element.style.zIndex = '3'
            } );
            this._timeline2.forEach( element => {
                element.style.zIndex = '1'
            } );
            this._timeline3.forEach( element => {
                element.style.zIndex = '1'
            } );
        }else if ( target.classList.contains( 'timeWeekly' ) ) {
            this._timeline2.forEach( element => {
                element.style.zIndex = '3'
            } );
            this._timeline1.forEach( element => {
                element.style.zIndex = '1'
            } );
            this._timeline3.forEach( element => {
                element.style.zIndex = '1'
            } );
        }else {
            this._timeline3.forEach( element => {
                element.style.zIndex = '3'
            } );
            this._timeline1.forEach( element => {
                element.style.zIndex = '1'
            } );
            this._timeline2.forEach( element => {
                element.style.zIndex = '1'
            } );
        }
    }
}

