import axios from 'axios'

export const GetMemberData = async () => {
  const response = await axios.get(
    'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f756d325-87d9-4f74-9b16-73aa7e3a63ba/teams.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211229T051342Z&X-Amz-Expires=86400&X-Amz-Signature=7c6d7bf9594986b3dd33833511ae1272cabbda1f417547834660a32dd7499ba0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22teams.json%22&x-id=GetObject',
  )
  return response.data
}
