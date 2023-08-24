const saudacao = (nome: string, pronome: string) => {
    if (pronome == "") {
        return `Olá Sr(a). ${nome}!`;
    }

    return `Olá ${pronome} ${nome}!`;
}