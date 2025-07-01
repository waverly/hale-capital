import {draftMode} from 'next/headers'
import {NextRequest, NextResponse} from 'next/server'

export async function GET(request: NextRequest) {
  let drafts = await draftMode()
  drafts.disable()
  return NextResponse.redirect(new URL('/', request.url))
}
