const candidatos= [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXMDwo2gTjWqMmoeR3I-5iJvgLORGLiLC7qbHQie8zLq1Ys_GZmj-MSGRqRDKXQYonQ4&usqp=CAU",
        name: "Alexandre Santos",
        profession: "Engenheiro Civil",
        birth: "15/06/1988",
        phone: "(28)99451-3892",
        email: "alexsantos@gmail.com",
    },
    {
        image: "https://jazevedo.net/wp-content/uploads/2018/04/Fotografia-LinkedIn-Headshot-Coimbra-Joao-Azevedo-0444.jpg",
        name: "Bruno Ferreira",
        profession: "Corretor de Imóveis",
        birth: "22/11/1974",
        phone: "(11)99153-6094",
        email: "brunocorretor@outlook.com",
    },
    {
        image: "https://media.licdn.com/dms/image/C4E03AQHKRcpAxryd0w/profile-displayphoto-shrink_400_400/0/1615209414135?e=1698883200&v=beta&t=ClrXbDP9SVlOj5MExvZUEa4csa_Hs4u6aokhCxXmn9U",
        name: "Fernanda torres",
        profession: "Jornalista",
        birth: "03/01/1993",
        phone: "(21)99942-3087",
        email: "fertorres@hotmail.com",
    },
    {
        image: "https://media.licdn.com/dms/image/D4D03AQEKfaNO67b54w/profile-displayphoto-shrink_400_400/0/1693483412212?e=1700697600&v=beta&t=7gQX108OCp7zLuMJA3HuvUMskQz6-qwZgiOjsyNwM9E",
        name: "Larissa Silva",
        profession: "Psicóloga",
        birth: "29/04/1995",
        phone: "(27)996734133",
        email: "psicologa.larissa@gmail.com",
    }
];

const image = document.querySelector("img")
const nome = document.querySelector("#nome")
const profissao = document.querySelector("#profissao")
const nascimento = document.querySelector("#nascimento")
const telefone = document.querySelector("#telefone")
const email = document.querySelector("#email")

let choice = 0

function changePerfil(indice) {
    image.src= candidatos[indice].image
    nome.innerText = candidatos[indice].name
    profissao.innerText = candidatos[indice].profession
    nascimento.innerText = candidatos[indice].birth
    telefone.innerText = candidatos[indice].phone
    email.innerText = candidatos[indice].email
}

function nextPerfil(){
    if (choice === candidatos.length - 1){
        choice = 0
    } else {
        choice++
    }
    changePerfil(choice)
}

function beforePerfil (){
    if (choice === 0){
        choice = 2
    } else {
        choice--
    }
    changePerfil(choice)
}




