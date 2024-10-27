import type { TeamData } from '../../src/interface/TeamData'
import { getGoogleSheetData } from './getGoogleSheet'

export async function handler() {
  try {
    const rows = await getGoogleSheetData('Team!A1:D10') // Chame a função com o range desejado
    const formattedData = formatTeamData(rows)

    return {
      statusCode: 200,
      body: JSON.stringify(formattedData),
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) }
  }
}

export function formatTeamData(rows): TeamData[] {
  if (!rows || rows.length === 0) return [] // Verifica se não há dados

  const keys = rows[0] // Primeira linha como cabeçalho
  return rows.slice(1).map(row => {
    return {
      name: row[keys.indexOf('NOME')], // Mapeando os dados
      institution: row[keys.indexOf('INSTITUICAO')],
      picture: row[keys.indexOf('FOTO')],
      role: row[keys.indexOf('CARGO')],
    }
  })
}
