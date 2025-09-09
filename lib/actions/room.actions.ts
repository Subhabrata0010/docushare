// lib/actions/room.actions.ts
'use server';

import { nanoid } from 'nanoid'
import { liveblocks } from '../liveblocks';
import { revalidatePath } from 'next/cache';
import { getAccessType, parseStringify } from '../utils';
import { redirect } from 'next/navigation';

// All the functions from the reference file:
// createDocument, getDocument, updateDocument, getDocuments,
// updateDocumentAccess, removeCollaborator, deleteDocument