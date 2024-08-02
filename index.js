const quote=document.querySelector('.quote');
const number=document.querySelector('.number');
const submitBtn=document.getElementById('submit-btn')


const quotes=[{
    quote:`"The best way to find yourself is to lose yourself in the
    service of others."`,
    number:`1`
},
{
    quote:`"If you want to live a happy life, tie it to a goal, not to
    people or things."`,
    number:`520`
},
{
    quote:`"At his best, man is the noblest of all animals; seperated
    from law and justice he is the worst."`,
    number:`9`
},
{
    quote:`"Your time is limited, so dont waste it living someone
    else's life."`,
    number:`25`
},
{
    quote:`"Tell me I forget.Teach me and I remember.Involve me and I
    learn."`,
    number:`100`
},
{
    quote:`"If you look at what you have in life,you'll always have more.
    If you look at what you dont have in life, you'll never have enough."`,
    number:`230`
},
{
    quote:`"It does not matter how slowly you go as long as you not stop."`,
    number:`78`
},
{
    quote:`"Our lives begin to end the day we become silent about 
    things that matter."`,
    number:`5`

},
{
    quote:`"Remeber that not getting what you want is sometimes a
    wonderful stroke of luck."`,
    number:`17`
},
{
    quote:`"The journey of thousand miles begins with one step."`,
    number:`230`
},];


submitBtn.addEventListener("click",function(){
    let randomNumb=Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[randomNumb].quote;
    number.innerText=quotes[randomNumb].number;

})