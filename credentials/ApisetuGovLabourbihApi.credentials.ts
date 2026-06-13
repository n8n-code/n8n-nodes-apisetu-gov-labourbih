import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovLabourbihApi implements ICredentialType {
        name = 'N8nDevApisetuGovLabourbihApi';

        displayName = 'Apisetu Gov Labourbih API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovLabourbih/apisetu-gov-labourbih.svg', dark: 'file:../nodes/ApisetuGovLabourbih/apisetu-gov-labourbih.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/labourbih/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/labourbih/v3',
                        description: 'The base URL of your Apisetu Gov Labourbih API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
