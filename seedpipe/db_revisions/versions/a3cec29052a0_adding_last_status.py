"""adding last status

Revision ID: a3cec29052a0
Revises: f1f07453d137
Create Date: 2017-11-02 19:39:32.820916

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a3cec29052a0'
down_revision = 'f1f07453d137'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('job', sa.Column('last_status', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('job', 'last_status')
    # ### end Alembic commands ###