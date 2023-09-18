const saudacao = (nome, pronome) => {
    if (pronome == "") {
        return `Olá Sr(a). ${nome}!`;
    }
    return `Olá ${pronome} ${nome}!`;
};
