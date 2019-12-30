class UserNotesController < ApplicationController
    def index
        usernotes = UserNote.all 
        render json: UserNoteSerializer.new(usernotes)
    end
end
 