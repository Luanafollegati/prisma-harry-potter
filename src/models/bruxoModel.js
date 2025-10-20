//é no model que fazemos a consulta para o banco de dados
//ex: SELECT * FROM bruxos; porém estamos usando PRISMA 
//que abstrai o comando SQL

//Importar prisma Client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    //SELECT * FROM bruxos = findMany
    return bruxos = await prisma.bruxo.findMany({
        ordeBy: { nome: 'asc'}
    })
}