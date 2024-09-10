VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});

document.getElementById('btn').addEventListener('click', sendMail);

function sendMail(e) {
    // Previne o comportamento padrão do clique em um botão dentro de um formulário.
    e.preventDefault();

    const email = document.getElementById('email').value
    const messagem = document.getElementById('mensagem').value
    const nome = document.getElementById('nome').value

    if (email && messagem && nome) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "andrezinhogame15@gmail.com",
            Password: "4D53D1F2B83508D4B57838D0E86A6430170B",
            To: '4ndr3mb@gmail.com',
            From: "andrezinhogame15@gmail.com",
            Subject: `${nome} esta te enviando uma mensagem`,
            Body: `Seu e-mail é ${email} \n \n e a mensagem: ${messagem}`
        }).then(() => {
            alert('Mensagem enviada')
            email = ''
            messagem = ''
            nome = ''
        });


    } else {
        alert('Preencha todos os campos')
    }

}