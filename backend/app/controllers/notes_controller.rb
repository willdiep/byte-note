class NotesController < ApplicationController
    def index
        notes = Note.all 
        render json: NoteSerializer.new(notes)
    end

    def show
        note = Note.find_by(id = params[:id])
        render json: NoteSerializer.new(note)
    end

    def create
        note = Note.create(topic: params[:topic], content: params[:content])
        render json: NoteSerializer.new(note)
        if note.valid?
            user_note = UserNote.create(user_id: 1, note_id: note.id)
        end
    end

end
 