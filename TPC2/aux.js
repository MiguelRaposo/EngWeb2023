exports.myDateTime = function () {
    var d = new Date().toISOString().substring(0,16)
    return d
}

exports.myName = function () {
    return "Miguel Velho Raposo"
}

exports.turma = "EngWeb2023"