module.exports = func => { //func é o que iremos receber
    return (req, res, next) => { //isso irá retornar uma nova function
        func(req, res, next).catch(next); //no qual possui a funcao que recebemos executada com qualquer erro que possa ser passado
    }
}