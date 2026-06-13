import type { INodeProperties } from 'n8n-workflow';

export const apIsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					]
				}
			},
			"options": [
				{
					"name": "Alimw",
					"value": "Alimw",
					"action": "Application for License for Inter State Migrant Workmen",
					"description": "API to verify Application for License for Inter State Migrant Workmen.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/alimw/certificate"
						}
					}
				},
				{
					"name": "Alsbl",
					"value": "Alsbl",
					"action": "Application/ License for Boilers",
					"description": "API to verify Application/ License for Boilers.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/alsbl/certificate"
						}
					}
				},
				{
					"name": "Alsfc",
					"value": "Alsfc",
					"action": "Application/ License for Factory",
					"description": "API to verify Application/ License for Factory.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/alsfc/certificate"
						}
					}
				},
				{
					"name": "Apptu",
					"value": "Apptu",
					"action": "Application realted to Trade Unions",
					"description": "API to verify Application realted to Trade Unions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/apptu/certificate"
						}
					}
				},
				{
					"name": "Clcer",
					"value": "Clcer",
					"action": "Registration Certificate for Contract Labour License",
					"description": "API to verify Registration Certificate for Contract Labour License.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/clcer/certificate"
						}
					}
				},
				{
					"name": "Noocl",
					"value": "Noocl",
					"action": "Notice of Closure",
					"description": "API to verify Notice of Closure.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/noocl/certificate"
						}
					}
				},
				{
					"name": "Srcer",
					"value": "Srcer",
					"action": "Registration Certificate of Shops And Commercial Establishment",
					"description": "API to verify Registration Certificate of Shops And Commercial Establishment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/srcer/certificate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /alimw/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alimw"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"RefNo\": \"BRRC/2018/236543\",\n  \"TokenNo\": \"Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alimw"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alimw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alimw"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alimw"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alimw"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alimw"
					]
				}
			}
		},
		{
			"displayName": "POST /alsbl/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsbl"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"RefNo\": \"BRRC/2018/236543\",\n  \"TokenNo\": \"Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsbl"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsbl"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsbl"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsbl"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsbl"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsbl"
					]
				}
			}
		},
		{
			"displayName": "POST /alsfc/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsfc"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"RefNo\": \"BRRC/2018/236543\",\n  \"TokenNo\": \"Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsfc"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsfc"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsfc"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsfc"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsfc"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Alsfc"
					]
				}
			}
		},
		{
			"displayName": "POST /apptu/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Apptu"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"RefNo\": \"BRRC/2018/236543\",\n  \"TokenNo\": \"Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Apptu"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Apptu"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Apptu"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Apptu"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Apptu"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Apptu"
					]
				}
			}
		},
		{
			"displayName": "POST /clcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Clcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"RefNo\": \"BRRC/2018/236543\",\n  \"TokenNo\": \"Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Clcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Clcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Clcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Clcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Clcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Clcer"
					]
				}
			}
		},
		{
			"displayName": "POST /noocl/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Noocl"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"RefNo\": \"BRRC/2018/236543\",\n  \"TokenNo\": \"Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Noocl"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Noocl"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Noocl"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Noocl"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Noocl"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Noocl"
					]
				}
			}
		},
		{
			"displayName": "POST /srcer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Srcer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"RefNo\": \"BRRC/2018/236543\",\n  \"TokenNo\": \"Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if token number is less than 8 chars\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Srcer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Srcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Srcer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Srcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Srcer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Srcer"
					]
				}
			}
		},
];
