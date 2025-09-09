/* eslint-disable no-unused-vars */

// SearchParamProps is a utility type for pages that use search parameters.
declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// AccessType defines the permissions a user can have in a Liveblocks room.
declare type AccessType = ["room:write"] | ["room:read", "room:presence:write"];

// RoomAccesses is a record mapping user emails to their access types.
declare type RoomAccesses = Record<string, AccessType>;

// UserType defines the roles a user can have in a document.
declare type UserType = "creator" | "editor" | "viewer";

// RoomMetadata contains metadata about a Liveblocks room.
declare type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};

// CreateDocumentParams defines the parameters for creating a new document.
declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

// User defines the structure of a user object.
declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

// ShareDocumentParams defines the parameters for sharing a document.
declare type ShareDocumentParams = {
  roomId: string;
  email: string;
  userType: UserType;
  updatedBy: User;
};

// UserTypeSelectorParams defines the props for the UserTypeSelector component.
declare type UserTypeSelectorParams = {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
  onClickHandler?: (value: string) => void;
};

// ShareDocumentDialogProps defines the props for the ShareModal component.
declare type ShareDocumentDialogProps = {
  roomId: string;
  collaborators: User[];
  creatorId: string;
  currentUserType: UserType;
};

// HeaderProps defines the props for the Header component.
declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

// CollaboratorProps defines the props for the Collaborator component.
declare type CollaboratorProps = {
  roomId: string;
  email: string;
  creatorId: string;
  collaborator: User;
  user: User;
};

// CollaborativeRoomProps defines the props for the CollaborativeRoom component.
declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: User[];
  currentUserType: UserType;
};

// AddDocumentBtnProps defines the props for the AddDocumentBtn component.
declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

// DeleteModalProps defines the props for the DeleteModal component.
declare type DeleteModalProps = { roomId: string };

// ThreadWrapperProps defines the props for the ThreadWrapper component.
declare type ThreadWrapperProps = { thread: ThreadData<BaseMetadata> };
