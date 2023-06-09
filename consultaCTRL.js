import Consulta from "./consultaModelo.js";

export default class ConsultaCtrl {
    consultar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "GET") {
            const consulta = new Consulta();
            consulta.consultar('').then((consulta) => {
                resposta.status(200).json(consulta);
            // consulta.consultar('').then((consultas) => {
            //     resposta.status(200).json(consultas);
            }).catch((erro) => {
                resposta.status(500).json({
                    status: false,
                    mensagem: "Não foi possível realizar a consultar: " + erro.message,
                });
            });
        }
        else {
            resposta.status(400).json({
                status: false,
                mensagem: "Método não permitido."
            });
        }
    }
}