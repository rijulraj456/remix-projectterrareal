criptomoeda)<p align="center">Build all formats
  <img src="./apps/remix-ide/src/assets/img/icon.png" alt="Remix Logo" width="200"/>
</p>auto create executable 
<h3 align="center">Remix Project</h3>cr { CompilationResult } from '@remix-project/remix-solidity'
//@ts-ignore
import * as fs from 'fs/promises'
import * as path from 'path'
(autocreate criptomoeda)
export async function getArtifactsByContractName (contractIdentifier: string) {
  //@ts-ignore
  const contractArtifacts = await fs.readdir(global.remixContractArtifactsPath)
  let contract
https://github.com/Jorgemucisalumfilho/remix-projectterrareal
  for (const artifactFile of contractArtifacts) {
    //@ts-ignore
    const artifact = await fs.readFile(path.join(global.remixContractArtifactsPath, artifactFile), 'utf-8')
    const artifactJSON: CompilationResult = JSON.parse(artifact)
    const contractFullPath = (Object.keys(artifactJSON.contracts!)).find((contractName) => artifactJSON.contracts![contractName] && artifactJSON.contracts![contractName][contractIdentifier])
    
    contract = contractFullPath ? artifactJSON.contracts![contractFullPath!][contractIdentifier] : undefined
    if (contract) break
  }
  return contract
}
