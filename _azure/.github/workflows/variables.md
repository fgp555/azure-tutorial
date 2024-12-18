# Login

```sh
az login --use-device-code
az account list --output table

subscriptionId=$(az account show --query id --output tsv)
echo $subscriptionId

az ad sp create-for-rbac --name "github-actions-sp2" --role contributor --scopes "./subscriptions/$subscriptionId" --sdk-auth
```

# Variables

```sh
# secrets
AZURE_CREDENTIALS={}
AZURE_PUBLISH_PROFILE=<publishData></publishData>
MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.asdfg.mongodb.net/database

# vars
AZ_APP=app-mern-241217003
AZ_LOCATION=canadacentral
AZ_PLAN=plan-mern-241217003
AZ_RG=rg-mern-241217003

```
