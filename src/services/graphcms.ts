import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

export const hygraph = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/clawcpwat3nj401t1a1u01bum/master',
  {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qYzFORUUzTUVaQk9EZzBNVGsyT1RVME1VTTRSa1ZEUkRRNFFVRkJOVVpHUmtaRk0wWkNRZyJ9.eyJodHRwczovL2dyYXBoY21zLmNvbS9sb2dpbnNDb3VudCI6MSwiaHR0cHM6Ly9ncmFwaGNtcy5jb20vZmxhZ3MiOnt9LCJpc3MiOiJodHRwczovL2F1dGguZ3JhcGhjbXMuY29tLyIsInN1YiI6ImdpdGh1Ynw5NTkyMDY3MSIsImF1ZCI6IjhWV1NkeVVodFpUNDNuQWlwcjJmaktSaGpKbXA4c1l5IiwiaWF0IjoxNjcwMjM3NTMxLCJleHAiOjE2NzA4NDIzMzEsInNpZCI6ImdOZWRsOVdUc2VVcEFXNkdFMjBFcTF5VGF6TW1VVHdsIiwibm9uY2UiOiJ0RWMyVlFBVXBNQX5vTG10RnJGOVJ2RV9HSGFQd2JMQiJ9.iitgHqzBYteeqOzDoRHwi9fPV-g53Hf_o19sytlrYrBIN-0-mYv0-6yPPslsP8zs6yFvQlSymz51lKBKnEdHyUZIPuL5RQHWr3oV1RL526Kfcn-3wktUDW_QOTi2bVvzuGAomKTXLvOdTZijm8t6lF3d_3h82oEKe0omhUEGuPtu87gGmS80Hdq21JZkIem7zP2gd5kHGCMv1J4OvjFEbCBD_PvBSGgU_TRa2EBRkQHxdX4LeZaAdNFGsxTX0smwCY9vzxEJCZB2d2cA-0dhotS82f7X0u9JaU7W-G5E4d67qYbNvYkksZUNX0ouS5NJsiCFhIMd-WgchutPR_zvzQ'
    }
  }
);

export const QUERY = gql`
  {
    projects {
      id
      name
      slug
      description
      sourceCode
      demo
      image {
        url
      }
      tags
    }
  }
`