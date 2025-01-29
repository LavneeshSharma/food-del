#include <GL/glut.h>
#include <stdio.h>
#include <math.h>
void myInit(void)
{
    glClearColor(1.0, 1.0, 1.0, 0.0);
    glColor3f(0.0f, 0.0f, 0.0f);
    glPointSize(4.0);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(-500.0, 500.0, -500.0, 500.0);
}

void myDisplay(void)
{
    glClear(GL_COLOR_BUFFER_BIT);
    glBegin(GL_POINTS);
    int x1, y1, x2, y2;
    printf("Enter x1 and y1 \n");
    scanf("%d", &x1);
    scanf("%d", &y1);
    printf("Enter x2 and y2\n");
    scanf("%d", &x2);
    scanf("%d", &y2);

    // glVertex2i(x1,y1);
    for (int j = -500; j <= 500; j++)
    {
        glVertex2i(0, j);
    }
    for (int j = -500; j <= 500; j++)
    {
        glVertex2i(j, 0);
    }

    float dx = x2 - x1;
    float dy = y2 - y1;
    // float p0 = 2 * dy - dx;
    // float d = 2*dy - 2*dx;
    float m = dy / dx;
    // float m1 = abs(m);

    if (x1 == x2)
    {
        if (y2 > y1)
        {
            for (int j = y1; j <= y2; j++)
            {
                glVertex2i(x1, j);
            }
        }
        else
        {
            for (int j = y2; j <= y1; j++)
            {
                glVertex2i(x1, j);
            }
        }
    }


    if (y1 == y2)
    {
        if (x2 > x1)
        {
            for (int i = x1; i <= x2; i++)
            {
                glVertex2i(i, y1);
            }
        }
        else
        {
            for (int j = x2; j <= x1; j--)
            {
                glVertex2i(j, y1);
            }
        }
    }

    
    if (m > 0 && m < 1)
    {
        if (x2 > x1)
        {

            float p0 = 2 * dy - dx;
            float d = 2 * dy - 2 * dx;
            float p = p0;
            int j = y1;
            for (int i = x1; i <= x2; i++)
            {
                if (p < 0)
                {
                    glVertex2i(i, j);
                    p = p + 2 * dy;
                }

                else
                {
                    j = j + 1;
                    glVertex2i(i, j);
                    p = p + d;
                }
            }
        }
        else if (x1 > x2)
        {

            float p0 = 2 * dy - dx;
            float d = 2 * dy - 2 * dx;
            float p = p0;
            int j = y1;
            for (int i = x1; i >= x2; i--)
            {
                if (p < 0)
                {
                    glVertex2i(i, j);
                    p = p + 2 * dy;
                }

                else
                {
                    j = j - 1;
                    glVertex2i(i, j);
                    p = p + d;
                }
            }
        }
    }

    else if (m > 1)
    {
        if (x2 > x1)
        {
            float p0 = 2 * dx - dy;
            float d = 2 * dx - 2 * dy;
            float p = p0;
            int j = x1;
            for (int i = y1; i <= y2; i++)
            {
                if (p < 0)
                {
                    glVertex2i(j, i);
                    p = p + 2 * dx;
                }

                else
                {
                    j = j + 1;
                    glVertex2i(j, i);
                    p = p + d;
                }
            }
        }
        else if (x1 > x2)
        {

            float p0 = 2 * dx - dy;
            float d = 2 * dx - 2 * dy;
            float p = p0;
            int j = x1;
            for (int i = y1; i >= y2; i--)
            {
                if (p < 0)
                {
                    glVertex2i(j, i);
                    p = p + 2 * dx;
                }

                else
                {
                    j = j - 1;
                    glVertex2i(j, i);
                    p = p + d;
                }
            }
        }
    }
    else
    {
        if (x2 > x1)
        {
            float p0 = 2 * dy - dx;
            float d = 2 * dy - 2 * dx;
            float p = p0;
            int j = y1;
            for (int i = x1; i <= x2; i++)
            {
                if (p < 0)
                {
                    glVertex2i(i, j);
                    p = p + 2 * dy;
                }

                else
                {
                    j = j - 1;
                    glVertex2i(i, j);
                    p = p + d;
                }
            }
        }
        else if (x1 > x2)
        {
            float p0 = 2 * dy - dx;
            float d = 2 * dy - 2 * dx;
            float p = p0;
            int j = y1;
            for (int i = x1; i >= x2; i--)
            {
                if (p < 0)
                {
                    glVertex2i(i, j);
                    p = p + 2 * dy;
                }

                else
                {
                    j = j + 1;
                    glVertex2i(i, j);
                    p = p + d;
                }
            }
        }
    }

    

    glEnd();
    glFlush();
}

void main(int argc, char **argv)
{
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(1000, 1000);
    glutInitWindowPosition(100, 150);
    glutCreateWindow("My second program");
    glutDisplayFunc(myDisplay);
    myInit();
    glutMainLoop();
}
